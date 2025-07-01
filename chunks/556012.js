e.d(n, { c: () => C });
var l = e(481060),
    r = e(933557),
    i = e(592125),
    a = e(699516),
    s = e(594174),
    c = e(273504),
    u = e(590433),
    o = e(388032);
let d = (t) => t !== c.jj.QUARANTINE_USER,
    j = (t) => {
        switch (t) {
            case c.jj.BLOCK_MESSAGE:
            case c.jj.FLAG_TO_CHANNEL:
            case c.jj.USER_COMMUNICATION_DISABLED:
            case c.jj.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    },
    A = (t) => {
        switch (t) {
            case c.jj.BLOCK_MESSAGE:
                return o.intl.string(o.t.d1ab8v);
            case c.jj.FLAG_TO_CHANNEL:
                return o.intl.string(o.t['Y+Vmvb']);
            case c.jj.USER_COMMUNICATION_DISABLED:
                return o.intl.string(o.t.Xz2njI);
            case c.jj.QUARANTINE_USER:
                return o.intl.string(o.t.NPO8eX);
        }
    },
    h = function (t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.fX.KEYWORD;
        switch (t) {
            case c.jj.BLOCK_MESSAGE:
                switch (n) {
                    case c.fX.MENTION_SPAM:
                        return o.intl.string(o.t['8hdId3']);
                    case c.fX.ML_SPAM:
                        return o.intl.string(o.t.tLQYs7);
                    default:
                        return o.intl.string(o.t.xAAocn);
                }
            case c.jj.FLAG_TO_CHANNEL:
                return o.intl.string(o.t.BHAXfX);
            case c.jj.USER_COMMUNICATION_DISABLED:
                return o.intl.string(o.t['bNK+gI']);
            case c.jj.QUARANTINE_USER:
                return o.intl.string(o.t['/7nL5e']);
        }
    },
    N = (t, n) => {
        var e, l, d;
        switch (t) {
            case c.jj.QUARANTINE_USER:
            case c.jj.BLOCK_MESSAGE:
                return null;
            case c.jj.FLAG_TO_CHANNEL: {
                let t = null == n || null == (e = n.metadata) ? void 0 : e.channelId;
                if (null == t) return null;
                let l = i.Z.getChannel(t);
                if (null == l) return null;
                let c = (0, r.F6)(l, s.default, a.Z);
                return o.intl.format(o.t.xQXnkJ, { channelName: c });
            }
            case c.jj.USER_COMMUNICATION_DISABLED: {
                let t = null != (d = null == n || null == (l = n.metadata) ? void 0 : l.durationSeconds) ? d : 0,
                    e = (0, u.L9)(t);
                if (null == e) return null;
                return o.intl.format(o.t.AFmbfX, { duration: e });
            }
        }
    },
    E = (t) => {
        switch (t) {
            case c.jj.BLOCK_MESSAGE:
                return l.k$p;
            case c.jj.FLAG_TO_CHANNEL:
                return l.VL1;
            case c.jj.USER_COMMUNICATION_DISABLED:
                return l.YlB;
            case c.jj.QUARANTINE_USER:
                return l.ics;
        }
    };
function C(t, n, e) {
    var r, i, a, s;
    return j(t)
        ? {
              headerText: null != (r = A(t)) ? r : '',
              descriptionText: null != (i = h(t, e)) ? i : '',
              helperText: null != (a = N(t, n)) ? a : null,
              icon: null != (s = E(t)) ? s : l.k$p,
              isEditable: d(t)
          }
        : null;
}
