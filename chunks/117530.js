n.d(t, { Z: () => P }), n(47120), n(653041), n(266796);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = new Map(),
    m = [];
function g(e, t) {
    var n, r;
    return null !== (r = null === (n = E(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : m;
}
function E(e) {
    var t;
    return null !== (t = h.get(e)) && void 0 !== t ? t : new Map();
}
function v(e, t, n) {
    let r = E(e);
    r.set(t, n), h.set(e, r);
}
function b(e) {
    let { channelId: t } = e,
        n = [...g(t, d.d.ChannelMessage)];
    n.shift(), v(t, d.d.ChannelMessage, n);
}
let y = (e) => {
    let { files: t, channelId: n, showLargeMessageDialog: r, draftType: i } = e,
        a = [...g(n, i)];
    if (a.length + t.length > f.dN1 && i !== d.d.SlashCommand && i !== d.d.ApplicationLauncherCommand) {
        l.Z.show({
            title: p.NW.string(p.t.wOr6hI),
            body: p.NW.formatToPlainString(p.t['qqyp/f'], { limit: f.dN1 })
        });
        return;
    }
    o().forEach(t, (e) => {
        let t = new c.n(e, n, r, a.length);
        t.upload(), a.push(t);
    }),
        v(n, i, a);
};
function O(e) {
    let { channelId: t, id: n, draftType: r } = e,
        i = [...g(t, r)],
        o = i.findIndex((e) =>
            (0, u.T)(
                {
                    uri: n,
                    filename: n
                },
                e
            )
        );
    o > -1 && (i.splice(o, 1)[0].cancel(), v(t, r, i));
}
function S(e) {
    let { channelId: t, attachmentIds: n, draftType: r } = e,
        i = [...g(t, r)];
    n.forEach((e) => {
        let t = i.findIndex((t) => e === t.id);
        t > -1 && i.splice(t, 1)[0].cancel();
    }),
        v(t, r, i);
}
function I(e) {
    let { channelId: t, id: n, filename: r, description: i, spoiler: o, thumbnail: a, draftType: s } = e,
        l = [...g(t, s)].map((e) => (e.id === n && (void 0 !== r && (e.filename = r), void 0 !== o && (e.spoiler = o), void 0 !== i && (e.description = i), void 0 !== a && (e.isThumbnail = a)), e));
    v(t, s, l);
}
function T(e) {
    let { channelId: t, id: n, file: r, draftType: i } = e,
        o = [...g(t, i)].filter((e) => e.id !== n),
        a = new c.n(r, t);
    a.upload(), o.push(a), v(t, i, o);
}
function N(e) {
    let { channelId: t, uploads: n, draftType: r } = e;
    v(t, r, n);
}
function A(e) {
    let { channelId: t, draftType: n } = e;
    v(t, n, []);
}
function C(e) {
    let { baseChannelId: t } = e;
    v(t, d.d.FirstThreadMessage, []);
}
class R extends (r = a.ZP.Store) {
    getFirstUpload(e, t) {
        let n = g(e, t);
        return n.length > 0 ? n[0] : null;
    }
    hasAdditionalUploads(e, t) {
        var n;
        return (null !== (n = g(e, t).length) && void 0 !== n ? n : 0) > 1;
    }
    getUploads(e, t) {
        return g(e, t);
    }
    getUploadCount(e, t) {
        var n;
        return null !== (n = g(e, t).length) && void 0 !== n ? n : 0;
    }
    getUpload(e, t, n) {
        return g(e, n).find((e) => e.id === t);
    }
    findUpload(e, t, n) {
        return g(e, t).find(n);
    }
}
_(R, 'displayName', 'UploadAttachmentStore');
let P = new R(s.Z, {
    UPLOAD_ATTACHMENT_POP_FILE: b,
    UPLOAD_ATTACHMENT_ADD_FILES: y,
    UPLOAD_ATTACHMENT_UPDATE_FILE: I,
    UPLOAD_ATTACHMENT_REMOVE_FILE: O,
    UPLOAD_ATTACHMENT_REMOVE_FILES: S,
    UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: A,
    UPLOAD_ATTACHMENT_SET_UPLOADS: N,
    UPLOAD_ATTACHMENT_SET_FILE: T,
    SIDEBAR_CLOSE: C
});
