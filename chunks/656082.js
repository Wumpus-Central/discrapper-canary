var t = '_erd';
function n(e) {
    return (e[t] = {}), i(e);
}
function i(e) {
    return e[t];
}
function r(e) {
    delete e[t];
}
e.exports = {
    initState: n,
    getState: i,
    cleanState: r
};
