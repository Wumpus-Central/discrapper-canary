n.d(t, { c: () => E });
var r = n(481060),
    l = n(933557),
    i = n(592125),
    a = n(699516),
    u = n(594174),
    o = n(273504),
    s = n(590433),
    c = n(388032);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.fX.KEYWORD;
    switch (e) {
        case o.jj.BLOCK_MESSAGE:
            switch (t) {
                case o.fX.MENTION_SPAM:
                    return c.intl.string(c.t["8hdId3"]);
                case o.fX.ML_SPAM:
                    return c.intl.string(c.t.tLQYs7);
                default:
                    return c.intl.string(c.t.xAAocn);
            }
        case o.jj.FLAG_TO_CHANNEL:
            return c.intl.string(c.t.BHAXfX);
        case o.jj.USER_COMMUNICATION_DISABLED:
            return c.intl.string(c.t["bNK+gI"]);
        case o.jj.QUARANTINE_USER:
            return c.intl.string(c.t["/7nL5e"]);
    }
};
function E(e, t, n) {
    var E, g, d, S;
    return ((e) => {
        switch (e) {
            case o.jj.BLOCK_MESSAGE:
            case o.jj.FLAG_TO_CHANNEL:
            case o.jj.USER_COMMUNICATION_DISABLED:
            case o.jj.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    })(e)
        ? {
              headerText:
                  null !=
                  (E = ((e) => {
                      switch (e) {
                          case o.jj.BLOCK_MESSAGE:
                              return c.intl.string(c.t.d1ab8v);
                          case o.jj.FLAG_TO_CHANNEL:
                              return c.intl.string(c.t["Y+Vmvb"]);
                          case o.jj.USER_COMMUNICATION_DISABLED:
                              return c.intl.string(c.t.Xz2njI);
                          case o.jj.QUARANTINE_USER:
                              return c.intl.string(c.t.NPO8eX);
                      }
                  })(e))
                      ? E
                      : "",
              descriptionText: null != (g = f(e, n)) ? g : "",
              helperText:
                  null !=
                  (d = ((e, t) => {
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
                              return c.intl.format(c.t.xQXnkJ, { channelName: o });
                          }
                          case o.jj.USER_COMMUNICATION_DISABLED: {
                              let e =
                                      null != (f = null == t || null == (r = t.metadata) ? void 0 : r.durationSeconds)
                                          ? f
                                          : 0,
                                  n = (0, s.getFriendlyDurationString)(e);
                              if (null == n) return null;
                              return c.intl.format(c.t.AFmbfX, { duration: n });
                          }
                      }
                  })(e, t))
                      ? d
                      : null,
              icon:
                  null !=
                  (S = ((e) => {
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
                  })(e))
                      ? S
                      : r.k$p,
              isEditable: e !== o.jj.QUARANTINE_USER,
          }
        : null;
}
