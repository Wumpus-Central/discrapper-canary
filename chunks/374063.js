n.d(e, { DO: () => M, mX: () => p });
var i = n(477900),
    r = n(582128),
    s = n(562708),
    a = n(189213),
    l = n(192308),
    o = n(379257),
    c = n(306537),
    u = n(36149),
    d = n(506775),
    E = n(272767),
    m = n(42376),
    f = n(652215),
    A = n(375708);
function g(t) {
    let e,
        n,
        { transitionState: l, onClose: m, onConfirm: f, ageGroup: g } = t,
        M = ((e = (0, u.yM)()), (n = (0, u.uE)()), e ? d.M$.TEEN : n ? d.M$.ADULT : d.M$.UNVERIFIED),
        {
            description: p,
            confirm: I,
            goBackIsPrimary: h,
        } = (function (t) {
            let e = (0, E.i)()[t],
                n = { text: A.intl.string(A.t.FDSSia), joins: !1 };
            switch (t) {
                case d.M$.ADULT:
                    return {
                        description: e,
                        confirm: { text: A.intl.string(A.t.wVq7uo), joins: !0 },
                        goBackIsPrimary: !1,
                    };
                case d.M$.TEEN:
                    return { description: e, confirm: n, goBackIsPrimary: !0 };
                case d.M$.UNVERIFIED:
                    return { description: e, confirm: n, goBackIsPrimary: !1 };
            }
        })(g ?? M),
        N = r.useCallback(async () => {
            if (I.joins) {
                (f?.(), await m());
                return;
            }
            o.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.NSFW_AGE_GATE });
        }, [I.joins, f, m]),
        _ = { text: A.intl.string(A.t["/g10LC"]), onClick: m },
        R = { text: I.text, onClick: N },
        T = h ? [{ ...R, variant: "secondary" }, _] : [{ ..._, variant: "secondary" }, R];
    return (0, i.jsx)(a.a, {
        transitionState: l,
        onClose: m,
        title: A.intl.string(A.t.xi46lg),
        subtitle: p,
        actions: T,
        trackingProps: {
            impression: { impressionName: s.ImpressionNames.USER_AGE_GATE_VERIFY },
            impressionType: s.ImpressionTypes.MODAL,
        },
    });
}
function M(t) {
    (0, l.openModal)((e) => (0, i.jsx)(g, { ...e, ...t }));
}
function p(t) {
    let e = (function (t) {
        let e;
        switch (t) {
            case f.t02.UNDER_MINIMUM_AGE:
                e = d.M$.TEEN;
                break;
            case f.t02.AGE_GROUP_UNVERIFIED:
                e = d.M$.UNVERIFIED;
                break;
            default:
                return null;
        }
        return (0, m.e)("invite_accept_error") ? e : null;
    })(t);
    null != e && M({ ageGroup: e });
}
