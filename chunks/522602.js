(n.d(t, { A: () => g }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(157559),
    o = n(280889),
    d = n(972711),
    c = n(174459),
    u = n(31717),
    _ = n(652215),
    E = n(375708);
let A = new Map(),
    h = [];
function I(e, t) {
    return f(e)?.get(t) ?? h;
}
function f(e) {
    return A.get(e) ?? new Map();
}
function p(e, t, n) {
    let i = f(e);
    (i.set(t, n), A.set(e, i));
}
class T extends a.Ay.Store {
    static displayName = "UploadAttachmentStore";
    getFirstUpload(e, t) {
        let n = I(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        return (I(e, t).length ?? 0) > 1;
    }
    getUploads(e, t) {
        return I(e, t);
    }
    getUploadCount(e, t) {
        return I(e, t).length ?? 0;
    }
    getUpload(e, t, n) {
        return I(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return I(e, t).find(n);
    }
}
let g = new T(s.h, {
    UPLOAD_ATTACHMENT_POP_FILE: function (e) {
        let { channelId: t } = e,
            n = [...I(t, u.C.ChannelMessage)];
        (n.shift(), p(t, u.C.ChannelMessage, n));
    },
    UPLOAD_ATTACHMENT_ADD_FILES: function (e) {
        let { files: t, channelId: n, draftType: i, allowOptimization: a } = e,
            s = [...I(n, i)];
        s.length + t.length > _.XgB && i !== u.C.SlashCommand && i !== u.C.ApplicationLauncherCommand
            ? l.A.show({
                  title: E.intl.string(E.t.wOr6hB),
                  body: E.intl.formatToPlainString(E.t["qqyp/e"], { limit: _.XgB }),
              })
            : (r().forEach(t, (e) => {
                  let t = new o.bK(e, n, s.length, a);
                  (t.upload(), s.push(t));
              }),
              p(n, i, s));
    },
    UPLOAD_ATTACHMENT_UPDATE_FILE: function (e) {
        let { channelId: t, id: n, filename: i, description: r, spoiler: a, thumbnail: s, draftType: l } = e,
            o = I(t, l).map((e) => {
                if (e.id === n) {
                    let t = {
                        spoilered: null != a && a !== e.spoiler ? a : void 0,
                        has_alt_text: null != r && r !== e.description ? r.trim().length > 0 : void 0,
                    };
                    ((null != t.spoilered || null != t.has_alt_text) && c.default.track(_.HAw.MEDIA_DRAFT_EDITED, t),
                        null != i && (e.filename = i),
                        null != a && (e.spoiler = a),
                        null != r && (e.description = r),
                        null != s && (e.isThumbnail = s));
                }
                return e;
            });
        p(t, l, o);
    },
    UPLOAD_ATTACHMENT_REMOVE_FILE: function (e) {
        let { channelId: t, id: n, draftType: i } = e,
            r = [...I(t, i)],
            a = r.findIndex((e) => (0, d.ph)({ uri: n, filename: n }, e));
        a > -1 && (r.splice(a, 1)[0].removeFromMsgDraft(), p(t, i, r));
    },
    UPLOAD_ATTACHMENT_REMOVE_FILES: function (e) {
        let { channelId: t, attachmentIds: n, draftType: i } = e,
            r = [...I(t, i)];
        (n.forEach((e) => {
            let t = r.findIndex((t) => e === t.id);
            t > -1 && r.splice(t, 1)[0].removeFromMsgDraft();
        }),
            p(t, i, r));
    },
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function (e) {
        let { channelId: t, draftType: n } = e;
        p(t, n, []);
    },
    UPLOAD_ATTACHMENT_SET_UPLOADS: function (e) {
        let { channelId: t, uploads: n, draftType: i } = e;
        p(t, i, n);
    },
    UPLOAD_ATTACHMENT_SET_FILE: function (e) {
        let { channelId: t, id: n, file: i, draftType: r, allowOptimization: a } = e,
            s = [...I(t, r)].filter((e) => e.id !== n),
            l = new o.bK(i, t, void 0, a);
        (l.upload(), s.push(l), p(t, r, s));
    },
});
