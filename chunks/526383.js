n.d(t, { Z: () => a }), n(47120);
var i = n(442837),
    l = n(430824),
    r = n(981631);
function a() {
    return (0, i.Wu)([l.Z], () =>
        Object.entries(l.Z.getGuilds())
            .filter((e) => {
                let [t, n] = e;
                return n.hasFeature(r.oNc.HUB);
            })
            .map((e) => {
                let [t, n] = e;
                return n;
            })
    );
}
