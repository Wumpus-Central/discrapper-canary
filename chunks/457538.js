var i = n(435558);
function r(e) {
    return Number.isFinite(e) ? (0, i.clamp)(e, 0, 200) : 100;
}
function a(e) {
    return null == e || "object" != typeof e || Array.isArray(e)
        ? {}
        : Object.fromEntries(
              Object.entries(e)
                  .filter((e) => {
                      let [t, n] = e;
                      return /^\d+$/.test(t) && "number" == typeof n;
                  })
                  .map((e) => {
                      let [t, n] = e;
                      return [t, r(n)];
                  }),
          );
}
n.d(
    t,
    {},
    {
        RH: function (e) {
            let t = Object.entries(e).filter((e) => {
                let [, t] = e;
                return 100 !== t;
            });
            return t.length > 0 ? Object.fromEntries(t) : void 0;
        },
        hT: function (e) {
            return {
                ...a(e?.speakerVolumes),
                application: r(e?.applicationVolume ?? 100),
                soundboard: r(e?.soundboardVolume ?? 100),
            };
        },
        pX: r,
        ud: a,
    },
);
