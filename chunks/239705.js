n.d(t, {
    x: () => A,
});
var r = n(397927),
    l = n(47167),
    i = n(734057),
    a = n(994500),
    u = n(287809),
    o = n(411335),
    s = n(200700),
    c = n(985018);
let E = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.uh.KEYWORD;
    switch (e) {
        case o.AH.BLOCK_MESSAGE:
            switch (t) {
                case o.uh.MENTION_SPAM:
                    return c.intl.string(c.t["8hdId3"]);
                case o.uh.ML_SPAM:
                    return c.intl.string(c.t.tLQYs5);
                default:
                    return c.intl.string(c.t.xAAoci);
            }
        case o.AH.FLAG_TO_CHANNEL:
            return c.intl.string(c.t.BHAXfa);
        case o.AH.USER_COMMUNICATION_DISABLED:
            return c.intl.string(c.t["bNK+gI"]);
        case o.AH.QUARANTINE_USER:
            return c.intl.string(c.t["/7nL5R"]);
    }
};

function A(e, t, n) {
    var A, g, S, f;
    return ((e) => {
        switch (e) {
            case o.AH.BLOCK_MESSAGE:
            case o.AH.FLAG_TO_CHANNEL:
            case o.AH.USER_COMMUNICATION_DISABLED:
            case o.AH.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    })(e)
        ? {
              headerText:
                  null !=
                  (A = ((e) => {
                      switch (e) {
                          case o.AH.BLOCK_MESSAGE:
                              return c.intl.string(c.t.d1ab8n);
                          case o.AH.FLAG_TO_CHANNEL:
                              return c.intl.string(c.t["Y+VmvU"]);
                          case o.AH.USER_COMMUNICATION_DISABLED:
                              return c.intl.string(c.t.Xz2njA);
                          case o.AH.QUARANTINE_USER:
                              return c.intl.string(c.t.NPO8ee);
                      }
                  })(e))
                      ? A
                      : "",
              descriptionText: null != (g = E(e, n)) ? g : "",
              helperText:
                  null !=
                  (S = ((e, t) => {
                      var n, r, E;
                      switch (e) {
                          case o.AH.QUARANTINE_USER:
                          case o.AH.BLOCK_MESSAGE:
                              return null;
                          case o.AH.FLAG_TO_CHANNEL: {
                              let e = null == t || null == (n = t.metadata) ? void 0 : n.channelId;
                              if (null == e) return null;
                              let r = i.A.getChannel(e);
                              if (null == r) return null;
                              let o = (0, l.m1)(r, u.default, a.A);
                              return c.intl.format(c.t.xQXnkK, {
                                  channelName: o,
                              });
                          }
                          case o.AH.USER_COMMUNICATION_DISABLED: {
                              let e =
                                      null != (r = null == t || null == (E = t.metadata) ? void 0 : E.durationSeconds)
                                          ? r
                                          : 0,
                                  n = (0, s.getFriendlyDurationString)(e);
                              if (null == n) return null;
                              return c.intl.format(c.t.AFmbfS, {
                                  duration: n,
                              });
                          }
                      }
                  })(e, t))
                      ? S
                      : null,
              icon:
                  null !=
                  (f = ((e) => {
                      switch (e) {
                          case o.AH.BLOCK_MESSAGE:
                              return r.aXh;
                          case o.AH.FLAG_TO_CHANNEL:
                              return r.N$i;
                          case o.AH.USER_COMMUNICATION_DISABLED:
                              return r.gQi;
                          case o.AH.QUARANTINE_USER:
                              return r._mZ;
                      }
                  })(e))
                      ? f
                      : r.aXh,
              isEditable: e !== o.AH.QUARANTINE_USER,
          }
        : null;
}
