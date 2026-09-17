e.d(n, { x: () => S });
var r = e(285796),
    A = e(276293),
    i = e(60270),
    u = e(353182),
    a = e(47167),
    l = e(734057),
    s = e(994500),
    c = e(287809),
    E = e(243277),
    N = e(200700),
    _ = e(375708);
function S(t, n, e) {
    var S, H, I;
    let C =
        ((S = t),
        (H = n),
        (I = e),
        !(function (t) {
            switch (t) {
                case E.AH.BLOCK_MESSAGE:
                case E.AH.FLAG_TO_CHANNEL:
                case E.AH.USER_COMMUNICATION_DISABLED:
                case E.AH.QUARANTINE_USER:
                    return !0;
                default:
                    return !1;
            }
        })(S)
            ? null
            : {
                  headerText:
                      (function (t) {
                          switch (t) {
                              case E.AH.BLOCK_MESSAGE:
                                  return _.intl.string(_.t.d1ab8n);
                              case E.AH.FLAG_TO_CHANNEL:
                                  return _.intl.string(_.t["Y+VmvU"]);
                              case E.AH.USER_COMMUNICATION_DISABLED:
                                  return _.intl.string(_.t.Xz2njA);
                              case E.AH.QUARANTINE_USER:
                                  return _.intl.string(_.t.NPO8ee);
                          }
                      })(S) ?? "",
                  descriptionText:
                      (function (t) {
                          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.uh.KEYWORD;
                          switch (t) {
                              case E.AH.BLOCK_MESSAGE:
                                  switch (n) {
                                      case E.uh.MENTION_SPAM:
                                          return _.intl.string(_.t["8hdId3"]);
                                      case E.uh.ML_SPAM:
                                          return _.intl.string(_.t.tLQYs5);
                                      default:
                                          return _.intl.string(_.t.xAAoci);
                                  }
                              case E.AH.FLAG_TO_CHANNEL:
                                  return _.intl.string(_.t.BHAXfa);
                              case E.AH.USER_COMMUNICATION_DISABLED:
                                  return _.intl.string(_.t["bNK+gI"]);
                              case E.AH.QUARANTINE_USER:
                                  return _.intl.string(_.t["/7nL5R"]);
                          }
                      })(S, I) ?? "",
                  helperText:
                      (function (t, n) {
                          switch (t) {
                              case E.AH.QUARANTINE_USER:
                              case E.AH.BLOCK_MESSAGE:
                                  return null;
                              case E.AH.FLAG_TO_CHANNEL: {
                                  let t = n?.metadata?.channelId;
                                  if (null == t) return null;
                                  let e = l.A.getChannel(t);
                                  if (null == e) return null;
                                  let r = (0, a.m1)(e, c.default, s.A);
                                  return _.intl.format(_.t.xQXnkK, { channelName: r });
                              }
                              case E.AH.USER_COMMUNICATION_DISABLED: {
                                  let t = n?.metadata?.durationSeconds ?? 0,
                                      e = (0, N.getFriendlyDurationString)(t);
                                  if (null == e) return null;
                                  return _.intl.format(_.t.AFmbfS, { duration: e });
                              }
                          }
                      })(S, H) ?? null,
                  isEditable: S !== E.AH.QUARANTINE_USER,
              });
    return null == C
        ? null
        : {
              ...C,
              icon:
                  (function (t) {
                      switch (t) {
                          case E.AH.BLOCK_MESSAGE:
                              return r.a;
                          case E.AH.FLAG_TO_CHANNEL:
                              return A.N;
                          case E.AH.USER_COMMUNICATION_DISABLED:
                              return i.g;
                          case E.AH.QUARANTINE_USER:
                              return u._;
                      }
                  })(t) ?? r.a,
          };
}
