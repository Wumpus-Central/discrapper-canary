i.d(t, { D: () => n });
function n(e) {
    return e.map((e, t) => {
        var i, n;
        return {
            file: e.file,
            name: null !== (n = e.id) && void 0 !== n ? n : 'attachment_'.concat(t),
            filename: null === (i = e.file) || void 0 === i ? void 0 : i.name
        };
    });
}
