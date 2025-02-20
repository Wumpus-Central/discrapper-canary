var t = '_erd';
function n(e) {
    return (e[t] = {}), r(e);
}
function r(e) {
    return e[t];
}
function i(e) {
    delete e[t];
}
e.exports = {
    initState: n,
    getState: r,
    cleanState: i
};
