r.d(t, { D: () => n });
function n(e) {
    return e.map((e, t) => {
        var r, n;
        return {
            file: e.file,
            name: null != (n = e.id) ? n : 'attachment_'.concat(t),
            filename: null == (r = e.file) ? void 0 : r.name
        };
    });
}
