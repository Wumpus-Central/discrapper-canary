var i = r(444675);
let a = 'object' == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG) ? (...e) => console.error('SEMVER', ...e) : () => {};
e.exports = a;
