n.d(t, { c: () => j });
var r = n(481060),
    l = n(933557),
    i = n(592125),
    a = n(699516),
    u = n(594174),
    o = n(273504),
    s = n(590433),
    c = n(388032);
let f = (e) => e !== o.jj.QUARANTINE_USER,
    E = (e) => {
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
    g = (e) => {
        switch (e) {
            case o.jj.BLOCK_MESSAGE:
                return c.NW.string(c.t.d1ab8v);
            case o.jj.FLAG_TO_CHANNEL:
                return c.NW.string(c.t['Y+Vmvb']);
            case o.jj.USER_COMMUNICATION_DISABLED:
                return c.NW.string(c.t.Xz2njI);
            case o.jj.QUARANTINE_USER:
                return c.NW.string(c.t.NPO8eX);
        }
    },
    d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.fX.KEYWORD;
        switch (e) {
            case o.jj.BLOCK_MESSAGE:
                switch (t) {
                    case o.fX.MENTION_SPAM:
                        return c.NW.string(c.t['8hdId3']);
                    case o.fX.ML_SPAM:
                        return c.NW.string(c.t.tLQYs7);
                    default:
                        return c.NW.string(c.t.xAAocn);
                }
            case o.jj.FLAG_TO_CHANNEL:
                return c.NW.string(c.t.BHAXfX);
            case o.jj.USER_COMMUNICATION_DISABLED:
                return c.NW.string(c.t['bNK+gI']);
            case o.jj.QUARANTINE_USER:
                return c.NW.string(c.t['/7nL5e']);
        }
    },
    S = (e, t) => {
        var n, r, f;
        switch (e) {
            case o.jj.QUARANTINE_USER:
            case o.jj.BLOCK_MESSAGE:
                return null;
            case o.jj.FLAG_TO_CHANNEL: {
                let e = null == t || null == (n = t.metadata) ? void 0 : n.channelId;
                if (null == e) return null;
                let r = i.Z.getChannel(e);
                if (null == r) return null;
                let o = (0, l.F6)(r, u.default, a.Z);
                return c.NW.format(c.t.xQXnkJ, { channelName: o });
            }
            case o.jj.USER_COMMUNICATION_DISABLED: {
                let e = null != (f = null == t || null == (r = t.metadata) ? void 0 : r.durationSeconds) ? f : 0,
                    n = (0, s.L9)(e);
                if (null == n) return null;
                return c.NW.format(c.t.AFmbfX, { duration: n });
            }
        }
    },
    O = (e) => {
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
function j(e, t, n) {
    var l, i, a, u;
    return E(e)
        ? {
              headerText: null != (l = g(e)) ? l : '',
              descriptionText: null != (i = d(e, n)) ? i : '',
              helperText: null != (a = S(e, t)) ? a : null,
              icon: null != (u = O(e)) ? u : r.k$p,
              isEditable: f(e)
          }
        : null;
}
