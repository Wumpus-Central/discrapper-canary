n.d(t, {
    S: () => c,
    w: () => f
});
var r = n(481060),
    i = n(925221),
    s = n(236413),
    a = n(85960),
    l = n(273504),
    o = n(388032);
let c = (e) => {
        switch (e) {
            case l.fX.KEYWORD:
            case l.fX.USER_PROFILE:
                return !0;
            default:
                return !1;
        }
    },
    d = (e) => {
        switch (e) {
            case l.fX.KEYWORD:
            case l.fX.ML_SPAM:
            case l.fX.DEFAULT_KEYWORD_LIST:
            case l.fX.MENTION_SPAM:
            case l.fX.SERVER_POLICY:
            case l.fX.USER_PROFILE:
                return !0;
            default:
                return !1;
        }
    },
    u = (e, t) => {
        var n;
        return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : a.I6[e].getDefaultRuleName();
    },
    m = (e, t) => {
        if ((0, s.Vb)(t) && (0, s.DO)(t))
            return t.triggerMetadata.regexPatterns.length > 0
                ? o.NW.formatToPlainString(o.t.xZUvxc, {
                      keywordCount: t.triggerMetadata.keywordFilter.length,
                      regexPatternCount: t.triggerMetadata.regexPatterns.length
                  })
                : o.NW.formatToPlainString(o.t.dJN7Li, { keywordCount: t.triggerMetadata.keywordFilter.length });
    },
    p = (e) => {
        switch (e) {
            case l.fX.KEYWORD:
                return o.NW.string(o.t.TzvaeH);
            case l.fX.ML_SPAM:
                return o.NW.string(o.t.jBZSQk);
            case l.fX.DEFAULT_KEYWORD_LIST:
                return o.NW.string(o.t.Drc8fn);
            case l.fX.MENTION_SPAM:
                return o.NW.string(o.t.flhXOz);
            case l.fX.USER_PROFILE:
                return o.NW.string(o.t.A35LyM);
            default:
                return null;
        }
    },
    g = (e) => {
        if (e === l.fX.KEYWORD) return o.NW.formatToPlainString(o.t.yNec2t, {});
    },
    h = (e) => {
        switch (e) {
            case l.fX.MENTION_SPAM:
                return r.lOy;
            case l.fX.KEYWORD:
                return r.avL;
            case l.fX.ML_SPAM:
            case l.fX.USER_PROFILE:
                return (0, r.GSL)(i.Z);
            case l.fX.DEFAULT_KEYWORD_LIST:
                return r.Oqj;
        }
    };
function f(e, t) {
    var n, i, s, a, l;
    return null != e && d(e)
        ? {
              headerText: null !== (n = u(e, t)) && void 0 !== n ? n : '',
              headerSubtext: null !== (i = m(e, t)) && void 0 !== i ? i : '',
              descriptionText: null !== (s = p(e)) && void 0 !== s ? s : '',
              descriptionSubtext: null !== (a = g(e)) && void 0 !== a ? a : '',
              icon: null !== (l = h(e)) && void 0 !== l ? l : r.xPt
          }
        : null;
}
