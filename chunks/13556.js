var i = n(444675);
let r = 'object' == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG) ? (...e) => console.error('SEMVER', ...e) : () => {};
e.exports = r;
