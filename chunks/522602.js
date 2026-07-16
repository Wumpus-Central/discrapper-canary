"use strict";
n.d(t, { A: () => T }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(157559),
    o = n(280889),
    d = n(972711),
    c = n(31717),
    u = n(652215),
    _ = n(375708);
let E = new Map(),
    A = [];
function h(e, t) {
    return I(e)?.get(t) ?? A;
}
function I(e) {
    return E.get(e) ?? new Map();
}
function f(e, t, n) {
    let i = I(e);
    i.set(t, n), E.set(e, i);
}
class p extends a.Ay.Store {
    static displayName = "UploadAttachmentStore";
    getFirstUpload(e, t) {
        let n = h(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        return (h(e, t).length ?? 0) > 1;
    }
    getUploads(e, t) {
        return h(e, t);
    }
    getUploadCount(e, t) {
        return h(e, t).length ?? 0;
    }
    getUpload(e, t, n) {
        return h(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return h(e, t).find(n);
    }
}
let T = new p(s.h, {
    UPLOAD_ATTACHMENT_POP_FILE: function (e) {
        let { channelId: t } = e,
            n = [...h(t, c.C.ChannelMessage)];
        n.shift(), f(t, c.C.ChannelMessage, n);
    },
    UPLOAD_ATTACHMENT_ADD_FILES: function (e) {
        let { files: t, channelId: n, draftType: i, allowOptimization: a } = e,
            s = [...h(n, i)];
        s.length + t.length > u.XgB && i !== c.C.SlashCommand && i !== c.C.ApplicationLauncherCommand
            ? l.A.show({
                  title: _.intl.string(_.t.wOr6hB),
                  body: _.intl.formatToPlainString(_.t["qqyp/e"], { limit: u.XgB }),
              })
            : (r().forEach(t, (e) => {
                  let t = new o.bK(e, n, s.length, a);
                  t.upload(), s.push(t);
              }),
              f(n, i, s));
    },
    UPLOAD_ATTACHMENT_UPDATE_FILE: function (e) {
        let { channelId: t, id: n, filename: i, description: r, spoiler: a, thumbnail: s, draftType: l } = e,
            o = [...h(t, l)].map(
                (e) => (
                    e.id === n &&
                        (void 0 !== i && (e.filename = i),
                        void 0 !== a && (e.spoiler = a),
                        void 0 !== r && (e.description = r),
                        void 0 !== s && (e.isThumbnail = s)),
                    e
                ),
            );
        f(t, l, o);
    },
    UPLOAD_ATTACHMENT_REMOVE_FILE: function (e) {
        let { channelId: t, id: n, draftType: i } = e,
            r = [...h(t, i)],
            a = r.findIndex((e) => (0, d.ph)({ uri: n, filename: n }, e));
        a > -1 && (r.splice(a, 1)[0].removeFromMsgDraft(), f(t, i, r));
    },
    UPLOAD_ATTACHMENT_REMOVE_FILES: function (e) {
        let { channelId: t, attachmentIds: n, draftType: i } = e,
            r = [...h(t, i)];
        n.forEach((e) => {
            let t = r.findIndex((t) => e === t.id);
            t > -1 && r.splice(t, 1)[0].removeFromMsgDraft();
        }),
            f(t, i, r);
    },
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function (e) {
        let { channelId: t, draftType: n } = e;
        f(t, n, []);
    },
    UPLOAD_ATTACHMENT_SET_UPLOADS: function (e) {
        let { channelId: t, uploads: n, draftType: i } = e;
        f(t, i, n);
    },
    UPLOAD_ATTACHMENT_SET_FILE: function (e) {
        let { channelId: t, id: n, file: i, draftType: r, allowOptimization: a } = e,
            s = [...h(t, r)].filter((e) => e.id !== n),
            l = new o.bK(i, t, void 0, a);
        l.upload(), s.push(l), f(t, r, s);
    },
});
