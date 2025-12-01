n.d(t, { Z: () => R }), n(388685), n(539854), n(953529);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(668781),
    c = n(141795),
    u = n(596956),
    d = n(703558),
    f = n(981631),
    p = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = new Map(),
    h = [];
function g(e, t) {
    var n, r;
    return null != (r = null == (n = E(e)) ? void 0 : n.get(t)) ? r : h;
}
function E(e) {
    var t;
    return null != (t = m.get(e)) ? t : new Map();
}
function b(e, t, n) {
    let r = E(e);
    r.set(t, n), m.set(e, r);
}
function y(e) {
    let { channelId: t } = e,
        n = [...g(t, d.d.ChannelMessage)];
    n.shift(), b(t, d.d.ChannelMessage, n);
}
let O = (e) => {
    let { files: t, channelId: n, showLargeMessageDialog: r, draftType: i, allowOptimization: o } = e,
        s = [...g(n, i)];
    if (s.length + t.length > f.dN1 && i !== d.d.SlashCommand && i !== d.d.ApplicationLauncherCommand)
        return void l.Z.show({
            title: p.intl.string(p.t.wOr6hB),
            body: p.intl.formatToPlainString(p.t["qqyp/e"], { limit: f.dN1 }),
        });
    a().forEach(t, (e) => {
        let t = new c.nH(e, n, r, s.length, o);
        t.upload(), s.push(t);
    }),
        b(n, i, s);
};
function v(e) {
    let { channelId: t, id: n, draftType: r } = e,
        i = [...g(t, r)],
        a = i.findIndex((e) =>
            (0, u.TC)(
                {
                    uri: n,
                    filename: n,
                },
                e,
            ),
        );
    a > -1 && (i.splice(a, 1)[0].removeFromMsgDraft(), b(t, r, i));
}
function S(e) {
    let { channelId: t, attachmentIds: n, draftType: r } = e,
        i = [...g(t, r)];
    n.forEach((e) => {
        let t = i.findIndex((t) => e === t.id);
        t > -1 && i.splice(t, 1)[0].removeFromMsgDraft();
    }),
        b(t, r, i);
}
function I(e) {
    let { channelId: t, id: n, filename: r, description: i, spoiler: a, thumbnail: o, draftType: s } = e,
        l = [...g(t, s)].map(
            (e) => (
                e.id === n &&
                    (void 0 !== r && (e.filename = r),
                    void 0 !== a && (e.spoiler = a),
                    void 0 !== i && (e.description = i),
                    void 0 !== o && (e.isThumbnail = o)),
                e
            ),
        );
    b(t, s, l);
}
function T(e) {
    let { channelId: t, id: n, file: r, draftType: i, allowOptimization: a } = e,
        o = [...g(t, i)].filter((e) => e.id !== n),
        s = new c.nH(r, t, void 0, void 0, a);
    s.upload(), o.push(s), b(t, i, o);
}
function A(e) {
    let { channelId: t, uploads: n, draftType: r } = e;
    b(t, r, n);
}
function C(e) {
    let { channelId: t, draftType: n } = e;
    b(t, n, []);
}
function N(e) {
    let { baseChannelId: t } = e;
    b(t, d.d.FirstThreadMessage, []);
}
class P extends (r = o.ZP.Store) {
    getFirstUpload(e, t) {
        let n = g(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        var n;
        return (null != (n = g(e, t).length) ? n : 0) > 1;
    }
    getUploads(e, t) {
        return g(e, t);
    }
    getUploadCount(e, t) {
        var n;
        return null != (n = g(e, t).length) ? n : 0;
    }
    getUpload(e, t, n) {
        return g(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return g(e, t).find(n);
    }
}
_(P, "displayName", "UploadAttachmentStore");
let R = new P(s.Z, {
    UPLOAD_ATTACHMENT_POP_FILE: y,
    UPLOAD_ATTACHMENT_ADD_FILES: O,
    UPLOAD_ATTACHMENT_UPDATE_FILE: I,
    UPLOAD_ATTACHMENT_REMOVE_FILE: v,
    UPLOAD_ATTACHMENT_REMOVE_FILES: S,
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: C,
    UPLOAD_ATTACHMENT_SET_UPLOADS: A,
    UPLOAD_ATTACHMENT_SET_FILE: T,
    SIDEBAR_CLOSE: N,
});
