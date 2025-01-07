r.d(n, {
    z: function () {
        return d;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(881052),
    o = r(439170),
    l = r(25251),
    u = r(981631);
let c = (e) => {
        let { sku_id: n, ...r } = e;
        return {
            id: r.id,
            skuId: n,
            config: {
                ...r,
                skuId: n
            }
        };
    },
    d = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(!e && l.Z.hasFetched()) && !l.Z.isFetching) {
            if (l.Z.canFetch()) {
                a.Z.dispatch({ type: 'USER_PROFILE_EFFECTS_FETCH' });
                try {
                    let { body: e } = await i.tn.get({
                            url: u.ANM.USER_PROFILE_EFFECTS,
                            rejectWithError: !1
                        }),
                        n = (null == e ? void 0 : e.profile_effect_configs).map(c);
                    a.Z.dispatch({
                        type: 'USER_PROFILE_EFFECTS_FETCH_SUCCESS',
                        profileEffects: n
                    });
                } catch (e) {
                    a.Z.dispatch({
                        type: 'USER_PROFILE_EFFECTS_FETCH_FAILURE',
                        error: e
                    }),
                        (0, o.X)(new s.Hx(e));
                }
            }
        }
    };
