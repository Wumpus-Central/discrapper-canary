var r = n(255701);
e.exports = function (e) {
    return ('number' == typeof e || 'bigint' == typeof e) && !r(e) && e !== 1 / 0 && e !== -1 / 0;
};
