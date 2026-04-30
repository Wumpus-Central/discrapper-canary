_.d(E, { q: () => B });
var T = _(264572).Buffer;
function B(I) {
    try {
        return T.from(JSON.stringify(I)).toString("base64");
    } catch (I) {
        return null;
    }
}
