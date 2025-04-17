n.d(e, { c: () => S });
var r = n(481060),
    l = n(933557),
    a = n(592125),
    s = n(699516),
    i = n(594174),
    u = n(273504),
    c = n(590433),
    o = n(388032);
let N = (t) => t !== u.jj.QUARANTINE_USER,
    d = (t) => {
        switch (t) {
            case u.jj.BLOCK_MESSAGE:
            case u.jj.FLAG_TO_CHANNEL:
            case u.jj.USER_COMMUNICATION_DISABLED:
            case u.jj.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    },
    j = (t) => {
        switch (t) {
            case u.jj.BLOCK_MESSAGE:
                return o.NW.string(o.t.d1ab8v);
            case u.jj.FLAG_TO_CHANNEL:
                return o.NW.string(o.t['Y+Vmvb']);
            case u.jj.USER_COMMUNICATION_DISABLED:
                return o.NW.string(o.t.Xz2njI);
            case u.jj.QUARANTINE_USER:
                return o.NW.string(o.t.NPO8eX);
        }
    },
    A = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.fX.KEYWORD;
        switch (t) {
            case u.jj.BLOCK_MESSAGE:
                switch (e) {
                    case u.fX.MENTION_SPAM:
                        return o.NW.string(o.t['8hdId3']);
                    case u.fX.ML_SPAM:
                        return o.NW.string(o.t.tLQYs7);
                    default:
                        return o.NW.string(o.t.xAAocn);
                }
            case u.jj.FLAG_TO_CHANNEL:
                return o.NW.string(o.t.BHAXfX);
            case u.jj.USER_COMMUNICATION_DISABLED:
                return o.NW.string(o.t['bNK+gI']);
            case u.jj.QUARANTINE_USER:
                return o.NW.string(o.t['/7nL5e']);
        }
    },
    E = (t, e) => {
        var n, r, N;
        switch (t) {
            case u.jj.QUARANTINE_USER:
            case u.jj.BLOCK_MESSAGE:
                return null;
            case u.jj.FLAG_TO_CHANNEL: {
                let t = null == e || null == (n = e.metadata) ? void 0 : n.channelId;
                if (null == t) return null;
                let r = a.Z.getChannel(t);
                if (null == r) return null;
                let u = (0, l.F6)(r, i.default, s.Z);
                return o.NW.format(o.t.xQXnkJ, { channelName: u });
            }
            case u.jj.USER_COMMUNICATION_DISABLED: {
                let t = null != (N = null == e || null == (r = e.metadata) ? void 0 : r.durationSeconds) ? N : 0,
                    n = (0, c.L9)(t);
                if (null == n) return null;
                return o.NW.format(o.t.AFmbfX, { duration: n });
            }
        }
    },
    _ = (t) => {
        switch (t) {
            case u.jj.BLOCK_MESSAGE:
                return r.k$p;
            case u.jj.FLAG_TO_CHANNEL:
                return r.VL1;
            case u.jj.USER_COMMUNICATION_DISABLED:
                return r.YlB;
            case u.jj.QUARANTINE_USER:
                return r.ics;
        }
    };
function S(t, e, n) {
    var l, a, s, i;
    return d(t)
        ? {
              headerText: null != (l = j(t)) ? l : '',
              descriptionText: null != (a = A(t, n)) ? a : '',
              helperText: null != (s = E(t, e)) ? s : null,
              icon: null != (i = _(t)) ? i : r.k$p,
              isEditable: N(t)
          }
        : null;
}
