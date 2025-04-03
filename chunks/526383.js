n.d(t, { Z: () => a }), n(47120);
var r = n(442837),
    i = n(430824),
    l = n(981631);
function a() {
    return (0, r.Wu)([i.Z], () =>
        Object.entries(i.Z.getGuilds())
            .filter((e) => {
                let [t, n] = e;
                return n.hasFeature(l.oNc.HUB);
            })
            .map((e) => {
                let [t, n] = e;
                return n;
            })
    );
}
