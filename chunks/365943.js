n.d(t, { z: () => c });
var i = n(544891),
    r = n(570140),
    a = n(479531),
    s = n(439170),
    o = n(25251),
    l = n(981631);
let u = (e) => {
        let { sku_id: t, ...n } = e;
        return {
            id: n.id,
            skuId: t,
            config: {
                ...n,
                skuId: t
            }
        };
    },
    c = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(!e && o.Z.hasFetched()) && !o.Z.isFetching && o.Z.canFetch()) {
            r.Z.dispatch({ type: 'USER_PROFILE_EFFECTS_FETCH' });
            try {
                let { body: e } = await i.tn.get({
                        url: l.ANM.USER_PROFILE_EFFECTS,
                        rejectWithError: !1
                    }),
                    t = (null == e ? void 0 : e.profile_effect_configs).map(u);
                r.Z.dispatch({
                    type: 'USER_PROFILE_EFFECTS_FETCH_SUCCESS',
                    profileEffects: t
                });
            } catch (t) {
                let e = new a.Z(t);
                (0, s.G)(e),
                    r.Z.dispatch({
                        type: 'USER_PROFILE_EFFECTS_FETCH_FAILURE',
                        error: e
                    });
            }
        }
    };
