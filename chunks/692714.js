var i = n(72290);
e.exports =
    "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG)
        ? (...e) => console.error("SEMVER", ...e)
        : () => {};
