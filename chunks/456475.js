let r = n(868667),
    i = (e, t) => {
        let n = r(e, t);
        return n && n.prerelease.length ? n.prerelease : null;
    };
e.exports = i;
