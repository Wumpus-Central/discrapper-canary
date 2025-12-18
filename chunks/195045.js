n.d(t, { Z: () => s });
var i = n(473749),
    r = n(442837),
    l = n(570140),
    a = n(785925),
    o = n(805422);
let s = () => {
    let e = (0, r.e7)([o.Z], () => o.Z.assets);
    return (
        i.useEffect(() => {
            let t = async () => {
                let e = await a.ZP.getAssets();
                null != e &&
                    l.Z.dispatch({
                        type: "HAVEN_GOT_ASSETS",
                        assets: e.body,
                    });
            };
            null == e && t();
        }, [e]),
        e
    );
};
