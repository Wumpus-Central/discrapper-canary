var r = n(45331);
e.exports = function (e) {
    return ('number' == typeof e || 'bigint' == typeof e) && !r(e) && e !== 1 / 0 && e !== -1 / 0;
};
