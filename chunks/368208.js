let n = r(532618);
e.exports = (e, t) => {
    let r = n(e.trim().replace(/^[=v]+/, ""), t);
    return r ? r.version : null;
};
