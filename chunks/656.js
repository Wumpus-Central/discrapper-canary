n.d(e, { mX: () => M, DO: () => I });
var i = n(477900),
    r = n(582128),
    s = n(613412),
    a = n(189213),
    l = n(192308),
    o = n(871309),
    c = n(171576),
    u = n(36149),
    d = n(112417),
    E = n(506775),
    m = n(42376),
    f = n(652215),
    A = n(792996);
function g(t) {
    let e,
        n,
        { transitionState: l, onClose: m, onConfirm: f, ageGroup: g } = t,
        I = ((e = (0, u.yM)()), (n = (0, u.uE)()), e ? E.M$.TEEN : n ? E.M$.ADULT : E.M$.UNVERIFIED),
        {
            description: M,
            confirm: N,
            goBackIsPrimary: h,
        } = (function (t) {
            let e = (0, d.K)()[t],
                n = { text: A.intl.string(A.t.FDSSia), joins: !1 };
            switch (t) {
                case E.M$.ADULT:
                    return {
                        description: e,
                        confirm: { text: A.intl.string(A.t.wVq7uo), joins: !0 },
                        goBackIsPrimary: !1,
                    };
                case E.M$.TEEN:
                    return { description: e, confirm: n, goBackIsPrimary: !0 };
                case E.M$.UNVERIFIED:
                    return { description: e, confirm: n, goBackIsPrimary: !1 };
            }
        })(g ?? I),
        p = r.useCallback(async () => {
            if (N.joins) {
                (f?.(), await m());
                return;
            }
            o.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.NSFW_AGE_GATE });
        }, [N.joins, f, m]),
        _ = { text: A.intl.string(A.t["/g10LC"]), onClick: m },
        R = { text: N.text, onClick: p },
        v = h ? [{ ...R, variant: "secondary" }, _] : [{ ..._, variant: "secondary" }, R];
    return (0, i.jsx)(a.a, {
        transitionState: l,
        onClose: m,
        title: A.intl.string(A.t.xi46lg),
        subtitle: M,
        actions: v,
        trackingProps: {
            impression: { impressionName: s.ImpressionNames.USER_AGE_GATE_VERIFY },
            impressionType: s.ImpressionTypes.MODAL,
        },
    });
}
function I(t) {
    (0, l.qf)((e) => (0, i.jsx)(g, { ...e, ...t }));
}
function M(t) {
    let e = (function (t) {
        let e;
        switch (t) {
            case f.t02.UNDER_MINIMUM_AGE:
                e = E.M$.TEEN;
                break;
            case f.t02.AGE_GROUP_UNVERIFIED:
                e = E.M$.UNVERIFIED;
                break;
            default:
                return null;
        }
        return (0, m.e)("invite_accept_error") ? e : null;
    })(t);
    null != e && I({ ageGroup: e });
}
