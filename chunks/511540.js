n.d(t, {
    c: function () {
        return l;
    }
}),
    n(47120);
var a = n(192379),
    r = n(489863),
    o = n(828878),
    i = n(388032);
function l(e, t, n) {
    let [l, c] = a.useState(!1),
        [s, d] = a.useState(null),
        u = a.useCallback(async () => {
            try {
                c(!0);
                let n = await (0, r.tV)(e);
                c(!1),
                    t({
                        userCode: e,
                        clientId: n.body.client_id,
                        scopes: n.body.scopes,
                        twoWayLinkCode: n.body.two_way_link_code
                    });
            } catch (e) {
                var a;
                d(429 === (a = null == e ? void 0 : e.status) ? i.intl.string(i.t.BPmZvr) : 404 === a || 400 === a ? i.intl.string(i.t.aWa1Pz) : i.intl.string(i.t.JNQRU1)), c(!1), (null == e ? void 0 : e.status) === 401 && n();
            }
        }, [e, t, n]);
    return (
        a.useEffect(() => {
            e.length === o.A.USER_CODE_LENGTH ? u() : d(null);
        }, [e, u]),
        {
            manualSubmit: u,
            error: s,
            submitting: l
        }
    );
}
