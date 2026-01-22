n.d(t, {
    B: () => l,
});

function l(e) {
    return e.map((e, t) => {
        var n, l;
        return {
            file: e.file,
            name: null != (n = e.id) ? n : "attachment_".concat(t),
            filename: null == (l = e.file) ? void 0 : l.name,
        };
    });
}
