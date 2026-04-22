"use strict";
n.d(t, { x: () => m });
var i = n(285796),
    r = n(276293),
    l = n(60270),
    s = n(353182),
    a = n(47167),
    o = n(734057),
    c = n(994500),
    u = n(287809),
    d = n(411335),
    _ = n(200700),
    E = n(985018);
let A = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.uh.KEYWORD;
    switch (e) {
        case d.AH.BLOCK_MESSAGE:
            switch (t) {
                case d.uh.MENTION_SPAM:
                    return E.intl.string(E.t["8hdId3"]);
                case d.uh.ML_SPAM:
                    return E.intl.string(E.t.tLQYs5);
                default:
                    return E.intl.string(E.t.xAAoci);
            }
        case d.AH.FLAG_TO_CHANNEL:
            return E.intl.string(E.t.BHAXfa);
        case d.AH.USER_COMMUNICATION_DISABLED:
            return E.intl.string(E.t["bNK+gI"]);
        case d.AH.QUARANTINE_USER:
            return E.intl.string(E.t["/7nL5R"]);
    }
};
function m(e, t, n) {
    return ((e) => {
        switch (e) {
            case d.AH.BLOCK_MESSAGE:
            case d.AH.FLAG_TO_CHANNEL:
            case d.AH.USER_COMMUNICATION_DISABLED:
            case d.AH.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    })(e)
        ? {
              headerText:
                  ((e) => {
                      switch (e) {
                          case d.AH.BLOCK_MESSAGE:
                              return E.intl.string(E.t.d1ab8n);
                          case d.AH.FLAG_TO_CHANNEL:
                              return E.intl.string(E.t["Y+VmvU"]);
                          case d.AH.USER_COMMUNICATION_DISABLED:
                              return E.intl.string(E.t.Xz2njA);
                          case d.AH.QUARANTINE_USER:
                              return E.intl.string(E.t.NPO8ee);
                      }
                  })(e) ?? "",
              descriptionText: A(e, n) ?? "",
              helperText:
                  ((e, t) => {
                      switch (e) {
                          case d.AH.QUARANTINE_USER:
                          case d.AH.BLOCK_MESSAGE:
                              return null;
                          case d.AH.FLAG_TO_CHANNEL: {
                              let e = t?.metadata?.channelId;
                              if (null == e) return null;
                              let n = o.A.getChannel(e);
                              if (null == n) return null;
                              let i = (0, a.m1)(n, u.default, c.A);
                              return E.intl.format(E.t.xQXnkK, { channelName: i });
                          }
                          case d.AH.USER_COMMUNICATION_DISABLED: {
                              let e = t?.metadata?.durationSeconds ?? 0,
                                  n = (0, _.getFriendlyDurationString)(e);
                              if (null == n) return null;
                              return E.intl.format(E.t.AFmbfS, { duration: n });
                          }
                      }
                  })(e, t) ?? null,
              icon:
                  ((e) => {
                      switch (e) {
                          case d.AH.BLOCK_MESSAGE:
                              return i.a;
                          case d.AH.FLAG_TO_CHANNEL:
                              return r.N;
                          case d.AH.USER_COMMUNICATION_DISABLED:
                              return l.g;
                          case d.AH.QUARANTINE_USER:
                              return s._;
                      }
                  })(e) ?? i.a,
              isEditable: e !== d.AH.QUARANTINE_USER,
          }
        : null;
}
