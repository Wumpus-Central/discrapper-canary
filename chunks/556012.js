n.d(t, { c: () => _ });
var r = n(481060),
    l = n(933557),
    i = n(592125),
    a = n(699516),
    u = n(594174),
    o = n(273504),
    s = n(590433),
    E = n(388032);
let c = (e) => e !== o.jj.QUARANTINE_USER,
    d = (e) => {
        switch (e) {
            case o.jj.BLOCK_MESSAGE:
            case o.jj.FLAG_TO_CHANNEL:
            case o.jj.USER_COMMUNICATION_DISABLED:
            case o.jj.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    },
    f = (e) => {
        switch (e) {
            case o.jj.BLOCK_MESSAGE:
                return E.intl.string(E.t.d1ab8v);
            case o.jj.FLAG_TO_CHANNEL:
                return E.intl.string(E.t['Y+Vmvb']);
            case o.jj.USER_COMMUNICATION_DISABLED:
                return E.intl.string(E.t.Xz2njI);
            case o.jj.QUARANTINE_USER:
                return E.intl.string(E.t.NPO8eX);
        }
    },
    g = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.fX.KEYWORD;
        switch (e) {
            case o.jj.BLOCK_MESSAGE:
                switch (t) {
                    case o.fX.MENTION_SPAM:
                        return E.intl.string(E.t['8hdId3']);
                    case o.fX.ML_SPAM:
                        return E.intl.string(E.t.tLQYs7);
                    default:
                        return E.intl.string(E.t.xAAocn);
                }
            case o.jj.FLAG_TO_CHANNEL:
                return E.intl.string(E.t.BHAXfX);
            case o.jj.USER_COMMUNICATION_DISABLED:
                return E.intl.string(E.t['bNK+gI']);
            case o.jj.QUARANTINE_USER:
                return E.intl.string(E.t['/7nL5e']);
        }
    },
    S = (e, t) => {
        var n, r, c;
        switch (e) {
            case o.jj.QUARANTINE_USER:
            case o.jj.BLOCK_MESSAGE:
                return null;
            case o.jj.FLAG_TO_CHANNEL: {
                let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                if (null == e) return null;
                let r = i.Z.getChannel(e);
                if (null == r) return null;
                let o = (0, l.F6)(r, u.default, a.Z);
                return E.intl.format(E.t.xQXnkJ, { channelName: o });
            }
            case o.jj.USER_COMMUNICATION_DISABLED: {
                let e = null !== (c = null == t ? void 0 : null === (r = t.metadata) || void 0 === r ? void 0 : r.durationSeconds) && void 0 !== c ? c : 0,
                    n = (0, s.L9)(e);
                if (null == n) return null;
                return E.intl.format(E.t.AFmbfX, { duration: n });
            }
        }
    },
    A = (e) => {
        switch (e) {
            case o.jj.BLOCK_MESSAGE:
                return r.k$p;
            case o.jj.FLAG_TO_CHANNEL:
                return r.VL1;
            case o.jj.USER_COMMUNICATION_DISABLED:
                return r.YlB;
            case o.jj.QUARANTINE_USER:
                return r.ics;
        }
    };
function _(e, t, n) {
    var l, i, a, u;
    return d(e)
        ? {
              headerText: null !== (l = f(e)) && void 0 !== l ? l : '',
              descriptionText: null !== (i = g(e, n)) && void 0 !== i ? i : '',
              helperText: null !== (a = S(e, t)) && void 0 !== a ? a : null,
              icon: null !== (u = A(e)) && void 0 !== u ? u : r.k$p,
              isEditable: c(e)
          }
        : null;
}
