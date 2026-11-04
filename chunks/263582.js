var l = n(855986),
    i = n(135621),
    r = n(287809),
    s = n(879610);
(n(652215),
    n.d(
        t,
        {},
        {
            A: function (e) {
                let { type: t, textValue: n, maxCharacterCount: a, showRemainingCharsAfterCount: o } = e,
                    u = (0, l.bG)([r.default], () => s.Ay.canUseIncreasedMessageLength(r.default.getCurrentUser())),
                    c = (0, i.A)(),
                    d = n.length,
                    h = null != t.upsellLongMessages && d > 2e3 && u,
                    m = null != t.upsellLongMessages && !u,
                    f = (a ?? c) - d,
                    p = f > (o ?? a ?? c / 10);
                return { isVisible: (h && f >= 0) || !p, showsUpsell: m && !p };
            },
        },
    ));
