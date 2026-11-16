let r = new URL(n(775702), n.b);
n.d(
    t,
    {},
    {
        i: function () {
            return WebAssembly.compileStreaming(fetch(r));
        },
    },
);
