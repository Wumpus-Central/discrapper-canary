n.d(t, {
    S: function () {
        return c;
    },
    w: function () {
        return p;
    }
});
var i = n(481060),
    r = n(925221),
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
    d = (e) => {
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
    u = (e, t) => {
        var n;
        return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : s.I6[e].getDefaultRuleName();
    },
    m = (e, t) => {
        if (!!(0, l.Vb)(t)) {
            if ((0, l.DO)(t))
                return t.triggerMetadata.regexPatterns.length > 0
                    ? o.intl.formatToPlainString(o.t.xZUvxc, {
                          keywordCount: t.triggerMetadata.keywordFilter.length,
                          regexPatternCount: t.triggerMetadata.regexPatterns.length
                      })
                    : o.intl.formatToPlainString(o.t.dJN7Li, { keywordCount: t.triggerMetadata.keywordFilter.length });
        }
    },
    h = (e) => {
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
    g = (e) => {
        if (e === a.fX.KEYWORD) return o.intl.formatToPlainString(o.t.yNec2t, {});
    },
    x = (e) => {
        switch (e) {
            case a.fX.MENTION_SPAM:
                return i.AtIcon;
            case a.fX.KEYWORD:
                return i.ChannelListPlusIcon;
            case a.fX.ML_SPAM:
            case a.fX.USER_PROFILE:
                return (0, i.makeIconCompat)(r.Z);
            case a.fX.DEFAULT_KEYWORD_LIST:
                return i.MenuIcon;
        }
    };
function p(e, t) {
    var n, r, l, s, a;
    return null != e && d(e)
        ? {
              headerText: null !== (n = u(e, t)) && void 0 !== n ? n : '',
              headerSubtext: null !== (r = m(e, t)) && void 0 !== r ? r : '',
              descriptionText: null !== (l = h(e)) && void 0 !== l ? l : '',
              descriptionSubtext: null !== (s = g(e)) && void 0 !== s ? s : '',
              icon: null !== (a = x(e)) && void 0 !== a ? a : i.LinkIcon
          }
        : null;
}
