let r = new URL(n(445181), n.b);
n.d(
    t,
    {},
    {
        i: function () {
            return WebAssembly.compileStreaming(fetch(r));
        },
    },
);
