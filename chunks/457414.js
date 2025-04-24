n.d(t, {
    S: () => c,
    w: () => f
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
    },
    u = (e) => {
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
    },
    d = (e, t) => {
        var n;
        return null != (n = null == t ? void 0 : t.name) ? n : s.I6[e].getDefaultRuleName();
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
    },
    p = (e) => {
        if (e === a.fX.KEYWORD) return o.intl.formatToPlainString(o.t.yNec2t, {});
    },
    h = (e) => {
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
    };
function f(e, t) {
    var n, i, l, s, a;
    return null != e && u(e)
        ? {
              headerText: null != (n = d(e, t)) ? n : '',
              headerSubtext: null != (i = m(e, t)) ? i : '',
              descriptionText: null != (l = g(e)) ? l : '',
              descriptionSubtext: null != (s = p(e)) ? s : '',
              icon: null != (a = h(e)) ? a : r.xPt
          }
        : null;
}
