n.d(t, {
    S: () => c,
    w: () => f
});
var r = n(481060),
    i = n(925221),
    l = n(236413),
    a = n(85960),
    s = n(273504),
    o = n(388032);
let c = (e) => {
        switch (e) {
            case s.fX.KEYWORD:
            case s.fX.USER_PROFILE:
                return !0;
            default:
                return !1;
        }
    },
    d = (e) => {
        switch (e) {
            case s.fX.KEYWORD:
            case s.fX.ML_SPAM:
            case s.fX.DEFAULT_KEYWORD_LIST:
            case s.fX.MENTION_SPAM:
            case s.fX.SERVER_POLICY:
            case s.fX.USER_PROFILE:
                return !0;
            default:
                return !1;
        }
    },
    u = (e, t) => {
        var n;
        return null != (n = null == t ? void 0 : t.name) ? n : a.I6[e].getDefaultRuleName();
    },
    m = (e, t) => {
        if ((0, l.Vb)(t) && (0, l.DO)(t))
            return t.triggerMetadata.regexPatterns.length > 0
                ? o.intl.formatToPlainString(o.t.xZUvxc, {
                      keywordCount: t.triggerMetadata.keywordFilter.length,
                      regexPatternCount: t.triggerMetadata.regexPatterns.length
                  })
                : o.intl.formatToPlainString(o.t.dJN7Li, { keywordCount: t.triggerMetadata.keywordFilter.length });
    },
    g = (e) => {
        switch (e) {
            case s.fX.KEYWORD:
                return o.intl.string(o.t.TzvaeH);
            case s.fX.ML_SPAM:
                return o.intl.string(o.t.jBZSQk);
            case s.fX.DEFAULT_KEYWORD_LIST:
                return o.intl.string(o.t.Drc8fn);
            case s.fX.MENTION_SPAM:
                return o.intl.string(o.t.flhXOz);
            case s.fX.USER_PROFILE:
                return o.intl.string(o.t.A35LyM);
            default:
                return null;
        }
    },
    p = (e) => {
        if (e === s.fX.KEYWORD) return o.intl.formatToPlainString(o.t.yNec2t, {});
    },
    h = (e) => {
        switch (e) {
            case s.fX.MENTION_SPAM:
                return r.lOy;
            case s.fX.KEYWORD:
                return r.avL;
            case s.fX.ML_SPAM:
            case s.fX.USER_PROFILE:
                return (0, r.GSL)(i.Z);
            case s.fX.DEFAULT_KEYWORD_LIST:
                return r.Oqj;
        }
    };
function f(e, t) {
    var n, i, l, a, s;
    return null != e && d(e)
        ? {
              headerText: null != (n = u(e, t)) ? n : '',
              headerSubtext: null != (i = m(e, t)) ? i : '',
              descriptionText: null != (l = g(e)) ? l : '',
              descriptionSubtext: null != (a = p(e)) ? a : '',
              icon: null != (s = h(e)) ? s : r.xPt
          }
        : null;
}
