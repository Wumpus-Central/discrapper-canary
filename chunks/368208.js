let r = n(532618);
e.exports = (e, t) => {
    let n = r(e.trim().replace(/^[=v]+/, ""), t);
    return n ? n.version : null;
};
