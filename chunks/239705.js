n.d(t, { x: () => c });
var r = n(397927),
    i = n(47167),
    l = n(734057),
    a = n(994500),
    u = n(287809),
    s = n(411335),
    E = n(200700),
    o = n(985018);
let A = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.uh.KEYWORD;
    switch (e) {
        case s.AH.BLOCK_MESSAGE:
            switch (t) {
                case s.uh.MENTION_SPAM:
                    return o.intl.string(o.t["8hdId3"]);
                case s.uh.ML_SPAM:
                    return o.intl.string(o.t.tLQYs5);
                default:
                    return o.intl.string(o.t.xAAoci);
            }
        case s.AH.FLAG_TO_CHANNEL:
            return o.intl.string(o.t.BHAXfa);
        case s.AH.USER_COMMUNICATION_DISABLED:
            return o.intl.string(o.t["bNK+gI"]);
        case s.AH.QUARANTINE_USER:
            return o.intl.string(o.t["/7nL5R"]);
    }
};
function c(e, t, n) {
    return ((e) => {
        switch (e) {
            case s.AH.BLOCK_MESSAGE:
            case s.AH.FLAG_TO_CHANNEL:
            case s.AH.USER_COMMUNICATION_DISABLED:
            case s.AH.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    })(e)
        ? {
              headerText:
                  ((e) => {
                      switch (e) {
                          case s.AH.BLOCK_MESSAGE:
                              return o.intl.string(o.t.d1ab8n);
                          case s.AH.FLAG_TO_CHANNEL:
                              return o.intl.string(o.t["Y+VmvU"]);
                          case s.AH.USER_COMMUNICATION_DISABLED:
                              return o.intl.string(o.t.Xz2njA);
                          case s.AH.QUARANTINE_USER:
                              return o.intl.string(o.t.NPO8ee);
                      }
                  })(e) ?? "",
              descriptionText: A(e, n) ?? "",
              helperText:
                  ((e, t) => {
                      switch (e) {
                          case s.AH.QUARANTINE_USER:
                          case s.AH.BLOCK_MESSAGE:
                              return null;
                          case s.AH.FLAG_TO_CHANNEL: {
                              let e = t?.metadata?.channelId;
                              if (null == e) return null;
                              let n = l.A.getChannel(e);
                              if (null == n) return null;
                              let r = (0, i.m1)(n, u.default, a.A);
                              return o.intl.format(o.t.xQXnkK, { channelName: r });
                          }
                          case s.AH.USER_COMMUNICATION_DISABLED: {
                              let e = t?.metadata?.durationSeconds ?? 0,
                                  n = (0, E.getFriendlyDurationString)(e);
                              if (null == n) return null;
                              return o.intl.format(o.t.AFmbfS, { duration: n });
                          }
                      }
                  })(e, t) ?? null,
              icon:
                  ((e) => {
                      switch (e) {
                          case s.AH.BLOCK_MESSAGE:
                              return r.aXh;
                          case s.AH.FLAG_TO_CHANNEL:
                              return r.N$i;
                          case s.AH.USER_COMMUNICATION_DISABLED:
                              return r.gQi;
                          case s.AH.QUARANTINE_USER:
                              return r._mZ;
                      }
                  })(e) ?? r.aXh,
              isEditable: e !== s.AH.QUARANTINE_USER,
          }
        : null;
}
