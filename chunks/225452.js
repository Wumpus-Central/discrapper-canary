n.d(t, { D: () => i });
function i(e) {
    return e.map((e, t) => {
        var n, i;
        return {
            file: e.file,
            name: null != (i = e.id) ? i : 'attachment_'.concat(t),
            filename: null == (n = e.file) ? void 0 : n.name
        };
    });
}
