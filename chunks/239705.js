l.d(e, { x: () => N });
var n = l(285796),
    i = l(276293),
    r = l(60270),
    a = l(353182),
    s = l(47167),
    c = l(734057),
    A = l(994500),
    u = l(287809),
    d = l(243277),
    o = l(200700),
    h = l(985018);
let E = function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.uh.KEYWORD;
    switch (t) {
        case d.AH.BLOCK_MESSAGE:
            switch (e) {
                case d.uh.MENTION_SPAM:
                    return h.intl.string(h.t["8hdId3"]);
                case d.uh.ML_SPAM:
                    return h.intl.string(h.t.tLQYs5);
                default:
                    return h.intl.string(h.t.xAAoci);
            }
        case d.AH.FLAG_TO_CHANNEL:
            return h.intl.string(h.t.BHAXfa);
        case d.AH.USER_COMMUNICATION_DISABLED:
            return h.intl.string(h.t["bNK+gI"]);
        case d.AH.QUARANTINE_USER:
            return h.intl.string(h.t["/7nL5R"]);
    }
};
function N(t, e, l) {
    return ((t) => {
        switch (t) {
            case d.AH.BLOCK_MESSAGE:
            case d.AH.FLAG_TO_CHANNEL:
            case d.AH.USER_COMMUNICATION_DISABLED:
            case d.AH.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    })(t)
        ? {
              headerText:
                  ((t) => {
                      switch (t) {
                          case d.AH.BLOCK_MESSAGE:
                              return h.intl.string(h.t.d1ab8n);
                          case d.AH.FLAG_TO_CHANNEL:
                              return h.intl.string(h.t["Y+VmvU"]);
                          case d.AH.USER_COMMUNICATION_DISABLED:
                              return h.intl.string(h.t.Xz2njA);
                          case d.AH.QUARANTINE_USER:
                              return h.intl.string(h.t.NPO8ee);
                      }
                  })(t) ?? "",
              descriptionText: E(t, l) ?? "",
              helperText:
                  ((t, e) => {
                      switch (t) {
                          case d.AH.QUARANTINE_USER:
                          case d.AH.BLOCK_MESSAGE:
                              return null;
                          case d.AH.FLAG_TO_CHANNEL: {
                              let t = e?.metadata?.channelId;
                              if (null == t) return null;
                              let l = c.A.getChannel(t);
                              if (null == l) return null;
                              let n = (0, s.m1)(l, u.default, A.A);
                              return h.intl.format(h.t.xQXnkK, { channelName: n });
                          }
                          case d.AH.USER_COMMUNICATION_DISABLED: {
                              let t = e?.metadata?.durationSeconds ?? 0,
                                  l = (0, o.getFriendlyDurationString)(t);
                              if (null == l) return null;
                              return h.intl.format(h.t.AFmbfS, { duration: l });
                          }
                      }
                  })(t, e) ?? null,
              icon:
                  ((t) => {
                      switch (t) {
                          case d.AH.BLOCK_MESSAGE:
                              return n.a;
                          case d.AH.FLAG_TO_CHANNEL:
                              return i.N;
                          case d.AH.USER_COMMUNICATION_DISABLED:
                              return r.g;
                          case d.AH.QUARANTINE_USER:
                              return a._;
                      }
                  })(t) ?? n.a,
              isEditable: t !== d.AH.QUARANTINE_USER,
          }
        : null;
}
