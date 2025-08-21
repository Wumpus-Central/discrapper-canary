e.d(n, { c: () => o });
var l = e(481060),
    r = e(933557),
    i = e(592125),
    a = e(699516),
    u = e(594174),
    s = e(273504),
    c = e(590433),
    d = e(388032);
let j = function (t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.fX.KEYWORD;
    switch (t) {
        case s.jj.BLOCK_MESSAGE:
            switch (n) {
                case s.fX.MENTION_SPAM:
                    return d.intl.string(d.t["8hdId3"]);
                case s.fX.ML_SPAM:
                    return d.intl.string(d.t.tLQYs7);
                default:
                    return d.intl.string(d.t.xAAocn);
            }
        case s.jj.FLAG_TO_CHANNEL:
            return d.intl.string(d.t.BHAXfX);
        case s.jj.USER_COMMUNICATION_DISABLED:
            return d.intl.string(d.t["bNK+gI"]);
        case s.jj.QUARANTINE_USER:
            return d.intl.string(d.t["/7nL5e"]);
    }
};
function o(t, n, e) {
    var o, A, E, N;
    return ((t) => {
        switch (t) {
            case s.jj.BLOCK_MESSAGE:
            case s.jj.FLAG_TO_CHANNEL:
            case s.jj.USER_COMMUNICATION_DISABLED:
            case s.jj.QUARANTINE_USER:
                return !0;
            default:
                return !1;
        }
    })(t)
        ? {
              headerText:
                  null !=
                  (o = ((t) => {
                      switch (t) {
                          case s.jj.BLOCK_MESSAGE:
                              return d.intl.string(d.t.d1ab8v);
                          case s.jj.FLAG_TO_CHANNEL:
                              return d.intl.string(d.t["Y+Vmvb"]);
                          case s.jj.USER_COMMUNICATION_DISABLED:
                              return d.intl.string(d.t.Xz2njI);
                          case s.jj.QUARANTINE_USER:
                              return d.intl.string(d.t.NPO8eX);
                      }
                  })(t))
                      ? o
                      : "",
              descriptionText: null != (A = j(t, e)) ? A : "",
              helperText:
                  null !=
                  (E = ((t, n) => {
                      var e, l, j;
                      switch (t) {
                          case s.jj.QUARANTINE_USER:
                          case s.jj.BLOCK_MESSAGE:
                              return null;
                          case s.jj.FLAG_TO_CHANNEL: {
                              let t = null == n || null == (e = n.metadata) ? void 0 : e.channelId;
                              if (null == t) return null;
                              let l = i.Z.getChannel(t);
                              if (null == l) return null;
                              let s = (0, r.F6)(l, u.default, a.Z);
                              return d.intl.format(d.t.xQXnkJ, { channelName: s });
                          }
                          case s.jj.USER_COMMUNICATION_DISABLED: {
                              let t =
                                      null != (j = null == n || null == (l = n.metadata) ? void 0 : l.durationSeconds)
                                          ? j
                                          : 0,
                                  e = (0, c.L9)(t);
                              if (null == e) return null;
                              return d.intl.format(d.t.AFmbfX, { duration: e });
                          }
                      }
                  })(t, n))
                      ? E
                      : null,
              icon:
                  null !=
                  (N = ((t) => {
                      switch (t) {
                          case s.jj.BLOCK_MESSAGE:
                              return l.k$p;
                          case s.jj.FLAG_TO_CHANNEL:
                              return l.VL1;
                          case s.jj.USER_COMMUNICATION_DISABLED:
                              return l.YlB;
                          case s.jj.QUARANTINE_USER:
                              return l.ics;
                      }
                  })(t))
                      ? N
                      : l.k$p,
              isEditable: t !== s.jj.QUARANTINE_USER,
          }
        : null;
}
