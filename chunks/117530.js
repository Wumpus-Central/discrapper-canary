var i,
    a = r(47120);
var o = r(653041);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(570140),
    d = r(668781),
    f = r(141795),
    p = r(596956),
    h = r(703558),
    _ = r(981631),
    m = r(388032);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new Map(),
    v = [];
function y(e, n) {
    var r, i;
    return null !== (i = null === (r = b(e)) || void 0 === r ? void 0 : r.get(n)) && void 0 !== i ? i : v;
}
function b(e) {
    var n;
    return null !== (n = E.get(e)) && void 0 !== n ? n : new Map();
}
function I(e, n, r) {
    let i = b(e);
    i.set(n, r), E.set(e, i);
}
function T(e) {
    let { channelId: n } = e,
        r = [...y(n, h.d.ChannelMessage)];
    r.shift(), I(n, h.d.ChannelMessage, r);
}
let S = (e) => {
    let { files: n, channelId: r, showLargeMessageDialog: i, draftType: a } = e,
        o = [...y(r, a)];
    if (o.length + n.length > _.dN1 && a !== h.d.SlashCommand && a !== h.d.ApplicationLauncherCommand) {
        d.Z.show({
            title: m.intl.string(m.t.wOr6hI),
            body: m.intl.formatToPlainString(m.t['qqyp/f'], { limit: _.dN1 })
        });
        return;
    }
    l().forEach(n, (e) => {
        let n = new f.n(e, r, i, o.length);
        n.upload(), o.push(n);
    }),
        I(r, a, o);
};
function A(e) {
    let { channelId: n, id: r, draftType: i } = e,
        a = [...y(n, i)],
        o = a.findIndex((e) =>
            (0, p.T)(
                {
                    uri: r,
                    filename: r
                },
                e
            )
        );
    o > -1 && (a.splice(o, 1)[0].cancel(), I(n, i, a));
}
function C(e) {
    let { channelId: n, attachmentIds: r, draftType: i } = e,
        a = [...y(n, i)];
    r.forEach((e) => {
        let n = a.findIndex((n) => e === n.id);
        n > -1 && a.splice(n, 1)[0].cancel();
    }),
        I(n, i, a);
}
function N(e) {
    let { channelId: n, id: r, filename: i, description: a, spoiler: o, thumbnail: s, draftType: l } = e,
        u = [...y(n, l)].map((e) => (e.id === r && (void 0 !== i && (e.filename = i), void 0 !== o && (e.spoiler = o), void 0 !== a && (e.description = a), void 0 !== s && (e.isThumbnail = s)), e));
    I(n, l, u);
}
function R(e) {
    let { channelId: n, id: r, file: i, draftType: a } = e,
        o = [...y(n, a)].filter((e) => e.id !== r),
        s = new f.n(i, n);
    s.upload(), o.push(s), I(n, a, o);
}
function O(e) {
    let { channelId: n, uploads: r, draftType: i } = e;
    I(n, i, r);
}
function D(e) {
    let { channelId: n, draftType: r } = e;
    I(n, r, []);
}
function x(e) {
    let { baseChannelId: n } = e;
    I(n, h.d.FirstThreadMessage, []);
}
class L extends (i = u.ZP.Store) {
    getFirstUpload(e, n) {
        let r = y(e, n);
        return r.length > 0 ? r[0] : null;
    }
    hasAdditionalUploads(e, n) {
        var r;
        return (null !== (r = y(e, n).length) && void 0 !== r ? r : 0) > 1;
    }
    getUploads(e, n) {
        return y(e, n);
    }
    getUploadCount(e, n) {
        var r;
        return null !== (r = y(e, n).length) && void 0 !== r ? r : 0;
    }
    getUpload(e, n, r) {
        return y(e, r).find((e) => e.id === n);
    }
    findUpload(e, n, r) {
        return y(e, n).find(r);
    }
}
g(L, 'displayName', 'UploadAttachmentStore'),
    (n.Z = new L(c.Z, {
        UPLOAD_ATTACHMENT_POP_FILE: T,
        UPLOAD_ATTACHMENT_ADD_FILES: S,
        UPLOAD_ATTACHMENT_UPDATE_FILE: N,
        UPLOAD_ATTACHMENT_REMOVE_FILE: A,
        UPLOAD_ATTACHMENT_REMOVE_FILES: C,
        UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: D,
        UPLOAD_ATTACHMENT_SET_UPLOADS: O,
        UPLOAD_ATTACHMENT_SET_FILE: R,
        SIDEBAR_CLOSE: x
    }));
