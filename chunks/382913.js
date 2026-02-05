i.d(t, { B: () => n });
function n(e) {
    return e.map((e, t) => ({ file: e.file, name: e.id ?? `attachment_${t}`, filename: e.file?.name }));
}
