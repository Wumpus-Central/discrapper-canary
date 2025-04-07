n.d(t, { c: () => _ });
var r = n(481060),
    l = n(933557),
    a = n(592125),
    i = n(699516),
    s = n(594174),
    c = n(273504),
    u = n(590433),
    o = n(388032);
let N = (e) => e !== c.jj.QUARANTINE_USER,
    d = (e) => {
        switch (e) {
            case c.jj.BLOCK_MESSAGE:
            case c.jj.FLAG_TO_CHANNEL:
            case c.jj.USER_COMMUNICATION_DISABLED:
            case c.jj.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    },
    j = (e) => {
        switch (e) {
            case c.jj.BLOCK_MESSAGE:
                return o.NW.string(o.t.d1ab8v);
            case c.jj.FLAG_TO_CHANNEL:
                return o.NW.string(o.t['Y+Vmvb']);
            case c.jj.USER_COMMUNICATION_DISABLED:
                return o.NW.string(o.t.Xz2njI);
            case c.jj.QUARANTINE_USER:
                return o.NW.string(o.t.NPO8eX);
        }
    },
    A = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.fX.KEYWORD;
        switch (e) {
            case c.jj.BLOCK_MESSAGE:
                switch (t) {
                    case c.fX.MENTION_SPAM:
                        return o.NW.string(o.t['8hdId3']);
                    case c.fX.ML_SPAM:
                        return o.NW.string(o.t.tLQYs7);
                    default:
                        return o.NW.string(o.t.xAAocn);
                }
            case c.jj.FLAG_TO_CHANNEL:
                return o.NW.string(o.t.BHAXfX);
            case c.jj.USER_COMMUNICATION_DISABLED:
                return o.NW.string(o.t['bNK+gI']);
            case c.jj.QUARANTINE_USER:
                return o.NW.string(o.t['/7nL5e']);
        }
    },
    h = (e, t) => {
        var n, r, N;
        switch (e) {
            case c.jj.QUARANTINE_USER:
            case c.jj.BLOCK_MESSAGE:
                return null;
            case c.jj.FLAG_TO_CHANNEL: {
                let e = null == t || null == (n = t.metadata) ? void 0 : n.channelId;
                if (null == e) return null;
                let r = a.Z.getChannel(e);
                if (null == r) return null;
                let c = (0, l.F6)(r, s.default, i.Z);
                return o.NW.format(o.t.xQXnkJ, { channelName: c });
            }
            case c.jj.USER_COMMUNICATION_DISABLED: {
                let e = null != (N = null == t || null == (r = t.metadata) ? void 0 : r.durationSeconds) ? N : 0,
                    n = (0, u.L9)(e);
                if (null == n) return null;
                return o.NW.format(o.t.AFmbfX, { duration: n });
            }
        }
    },
    E = (e) => {
        switch (e) {
            case c.jj.BLOCK_MESSAGE:
                return r.k$p;
            case c.jj.FLAG_TO_CHANNEL:
                return r.VL1;
            case c.jj.USER_COMMUNICATION_DISABLED:
                return r.YlB;
            case c.jj.QUARANTINE_USER:
                return r.ics;
        }
    };
function _(e, t, n) {
    var l, a, i, s;
    return d(e)
        ? {
              headerText: null != (l = j(e)) ? l : '',
              descriptionText: null != (a = A(e, n)) ? a : '',
              helperText: null != (i = h(e, t)) ? i : null,
              icon: null != (s = E(e)) ? s : r.k$p,
              isEditable: N(e)
          }
        : null;
}
