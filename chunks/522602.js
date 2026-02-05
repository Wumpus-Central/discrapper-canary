"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(157559),
    l = n(743445),
    u = n(972711),
    c = n(31717),
    d = n(652215),
    _ = n(985018);
let f = new Map(),
    p = [];
function h(e, t) {
    return m(e)?.get(t) ?? p;
}
function m(e) {
    return f.get(e) ?? new Map();
}
function g(e, t, n) {
    let r = m(e);
    r.set(t, n), f.set(e, r);
}
function E(e) {
    let { channelId: t } = e,
        n = [...h(t, c.C.ChannelMessage)];
    n.shift(), g(t, c.C.ChannelMessage, n);
}
let A = (e) => {
    let { files: t, channelId: n, draftType: r, allowOptimization: a } = e,
        s = [...h(n, r)];
    s.length + t.length > d.XgB && r !== c.C.SlashCommand && r !== c.C.ApplicationLauncherCommand
        ? o.A.show({
              title: _.intl.string(_.t.wOr6hB),
              body: _.intl.formatToPlainString(_.t["qqyp/e"], { limit: d.XgB }),
          })
        : (i().forEach(t, (e) => {
              let t = new l.bK(e, n, s.length, a);
              t.upload(), s.push(t);
          }),
          g(n, r, s));
};
function I(e) {
    let { channelId: t, id: n, draftType: r } = e,
        i = [...h(t, r)],
        a = i.findIndex((e) => (0, u.ph)({ uri: n, filename: n }, e));
    a > -1 && (i.splice(a, 1)[0].removeFromMsgDraft(), g(t, r, i));
}
function T(e) {
    let { channelId: t, attachmentIds: n, draftType: r } = e,
        i = [...h(t, r)];
    n.forEach((e) => {
        let t = i.findIndex((t) => e === t.id);
        t > -1 && i.splice(t, 1)[0].removeFromMsgDraft();
    }),
        g(t, r, i);
}
function y(e) {
    let { channelId: t, id: n, filename: r, description: i, spoiler: a, thumbnail: s, draftType: o } = e,
        l = [...h(t, o)].map(
            (e) => (
                e.id === n &&
                    (void 0 !== r && (e.filename = r),
                    void 0 !== a && (e.spoiler = a),
                    void 0 !== i && (e.description = i),
                    void 0 !== s && (e.isThumbnail = s)),
                e
            ),
        );
    g(t, o, l);
}
function S(e) {
    let { channelId: t, id: n, file: r, draftType: i, allowOptimization: a } = e,
        s = [...h(t, i)].filter((e) => e.id !== n),
        o = new l.bK(r, t, void 0, a);
    o.upload(), s.push(o), g(t, i, s);
}
function v(e) {
    let { channelId: t, uploads: n, draftType: r } = e;
    g(t, r, n);
}
function C(e) {
    let { channelId: t, draftType: n } = e;
    g(t, n, []);
}
function b(e) {
    let { baseChannelId: t } = e;
    g(t, c.C.FirstThreadMessage, []);
}
class N extends a.Ay.Store {
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
let R = new N(s.h, {
    UPLOAD_ATTACHMENT_POP_FILE: E,
    UPLOAD_ATTACHMENT_ADD_FILES: A,
    UPLOAD_ATTACHMENT_UPDATE_FILE: y,
    UPLOAD_ATTACHMENT_REMOVE_FILE: I,
    UPLOAD_ATTACHMENT_REMOVE_FILES: T,
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: C,
    UPLOAD_ATTACHMENT_SET_UPLOADS: v,
    UPLOAD_ATTACHMENT_SET_FILE: S,
    SIDEBAR_CLOSE: b,
});
