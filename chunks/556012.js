e.d(n, { c: () => S });
var r = e(481060),
    l = e(933557),
    a = e(592125),
    i = e(699516),
    s = e(594174),
    u = e(273504),
    c = e(590433),
    o = e(388032);
let d = (t) => t !== u.jj.QUARANTINE_USER,
    j = (t) => {
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
    A = (t) => {
        switch (t) {
            case u.jj.BLOCK_MESSAGE:
                return o.intl.string(o.t.d1ab8v);
            case u.jj.FLAG_TO_CHANNEL:
                return o.intl.string(o.t['Y+Vmvb']);
            case u.jj.USER_COMMUNICATION_DISABLED:
                return o.intl.string(o.t.Xz2njI);
            case u.jj.QUARANTINE_USER:
                return o.intl.string(o.t.NPO8eX);
        }
    },
    E = function (t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.fX.KEYWORD;
        switch (t) {
            case u.jj.BLOCK_MESSAGE:
                switch (n) {
                    case u.fX.MENTION_SPAM:
                        return o.intl.string(o.t['8hdId3']);
                    case u.fX.ML_SPAM:
                        return o.intl.string(o.t.tLQYs7);
                    default:
                        return o.intl.string(o.t.xAAocn);
                }
            case u.jj.FLAG_TO_CHANNEL:
                return o.intl.string(o.t.BHAXfX);
            case u.jj.USER_COMMUNICATION_DISABLED:
                return o.intl.string(o.t['bNK+gI']);
            case u.jj.QUARANTINE_USER:
                return o.intl.string(o.t['/7nL5e']);
        }
    },
    N = (t, n) => {
        var e, r, d;
        switch (t) {
            case u.jj.QUARANTINE_USER:
            case u.jj.BLOCK_MESSAGE:
                return null;
            case u.jj.FLAG_TO_CHANNEL: {
                let t = null == n || null == (e = n.metadata) ? void 0 : e.channelId;
                if (null == t) return null;
                let r = a.Z.getChannel(t);
                if (null == r) return null;
                let u = (0, l.F6)(r, s.default, i.Z);
                return o.intl.format(o.t.xQXnkJ, { channelName: u });
            }
            case u.jj.USER_COMMUNICATION_DISABLED: {
                let t = null != (d = null == n || null == (r = n.metadata) ? void 0 : r.durationSeconds) ? d : 0,
                    e = (0, c.L9)(t);
                if (null == e) return null;
                return o.intl.format(o.t.AFmbfX, { duration: e });
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
function S(t, n, e) {
    var l, a, i, s;
    return j(t)
        ? {
              headerText: null != (l = A(t)) ? l : '',
              descriptionText: null != (a = E(t, e)) ? a : '',
              helperText: null != (i = N(t, n)) ? i : null,
              icon: null != (s = _(t)) ? s : r.k$p,
              isEditable: d(t)
          }
        : null;
}
