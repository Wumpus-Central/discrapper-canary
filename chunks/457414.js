n.d(t, {
    S: () => c,
    w: () => d,
});
var r = n(481060),
    i = n(925221),
    l = n(236413),
    s = n(85960),
    a = n(273504),
    o = n(388032);
let c = (e) => {
    switch (e) {
        case a.fX.KEYWORD:
        case a.fX.USER_PROFILE:
            return !0;
        default:
            return !1;
    }
};
function d(e, t) {
    var n, c, d, u, g, m;
    return null != e &&
        ((e) => {
            switch (e) {
                case a.fX.KEYWORD:
                case a.fX.ML_SPAM:
                case a.fX.DEFAULT_KEYWORD_LIST:
                case a.fX.MENTION_SPAM:
                case a.fX.SERVER_POLICY:
                case a.fX.USER_PROFILE:
                    return !0;
                default:
                    return !1;
            }
        })(e)
        ? {
              headerText:
                  null !== (n = null != (m = null == t ? void 0 : t.name) ? m : s.I6[e].getDefaultRuleName()) &&
                  void 0 !== n
                      ? n
                      : "",
              headerSubtext:
                  null !=
                  (c = ((e, t) => {
                      if ((0, l.Vb)(t) && (0, l.DO)(t))
                          return t.triggerMetadata.regexPatterns.length > 0
                              ? o.intl.formatToPlainString(o.t.xZUvxc, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                    regexPatternCount: t.triggerMetadata.regexPatterns.length,
                                })
                              : o.intl.formatToPlainString(o.t.dJN7Li, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                });
                  })(0, t))
                      ? c
                      : "",
              descriptionText:
                  null !=
                  (d = ((e) => {
                      switch (e) {
                          case a.fX.KEYWORD:
                              return o.intl.string(o.t.TzvaeH);
                          case a.fX.ML_SPAM:
                              return o.intl.string(o.t.jBZSQk);
                          case a.fX.DEFAULT_KEYWORD_LIST:
                              return o.intl.string(o.t.Drc8fn);
                          case a.fX.MENTION_SPAM:
                              return o.intl.string(o.t.flhXOz);
                          case a.fX.USER_PROFILE:
                              return o.intl.string(o.t.A35LyM);
                          default:
                              return null;
                      }
                  })(e))
                      ? d
                      : "",
              descriptionSubtext:
                  null !=
                  (u = ((e) => {
                      if (e === a.fX.KEYWORD) return o.intl.formatToPlainString(o.t.yNec2t, {});
                  })(e))
                      ? u
                      : "",
              icon:
                  null !=
                  (g = ((e) => {
                      switch (e) {
                          case a.fX.MENTION_SPAM:
                              return r.lOy;
                          case a.fX.KEYWORD:
                              return r.avL;
                          case a.fX.ML_SPAM:
                          case a.fX.USER_PROFILE:
                              return (0, r.GSL)(i.Z);
                          case a.fX.DEFAULT_KEYWORD_LIST:
                              return r.Oqj;
                      }
                  })(e))
                      ? g
                      : r.xPt,
          }
        : null;
}
