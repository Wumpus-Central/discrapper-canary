n.d(
    t,
    {},
    {
        D: async function (e, t) {
            let n,
                { signal: i } = e,
                r = setTimeout(() => e.abort(), 3e4);
            try {
                return await new Promise((e, r) => {
                    ((n = () => r(Error("Discover request aborted"))),
                    i.addEventListener("abort", n, { once: !0 }),
                    i.aborted)
                        ? n()
                        : (async function () {
                              try {
                                  e(await t());
                              } catch (e) {
                                  r(e);
                              }
                          })();
                });
            } finally {
                (clearTimeout(r), null != n && i.removeEventListener("abort", n));
            }
        },
    },
);
